import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEnumString(str: string) {
  return str.replace(/([A-Z])/g, " $1").trim();
}

export function formatPriceValue(value: number | null, isMin: boolean) {
  if (value === null || value === 0)
    return isMin ? "Min Price" : "Max Price";
  if (value >= 1000) {
    const kValue = value / 1000;
    return isMin ? `$${kValue}k+` : `<$${kValue}k`;
  }
  return isMin ? `$${value}+` : `<$${value}`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cleanParams(params: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(params).filter(
      (
        [_, value] // eslint-disable-line @typescript-eslint/no-unused-vars
      ) =>
        value !== undefined &&
        value !== "any" &&
        value !== "" &&
        (Array.isArray(value) ? value.some((v) => v !== null) : value !== null)
    )
  );
}

type MutationMessages = {
  success?: string;
  error: string;
};

export const withToast = async <T>(
  mutationFn: Promise<T>,
  messages: Partial<MutationMessages>
) => {
  const { success, error } = messages;

  try {
    const result = await mutationFn;
    if (success) toast.success(success);
    return result;
  } catch (err) {
    if (error) toast.error(error);
    throw err;
  }
};

export const createNewUserInDatabase = async (
  user: any,
  idToken: any,
  userRole: string,
  fetchWithBQ: any
) => {
  const createEndpoint =
    userRole?.toLowerCase() === "manager" ? "/managers" : "/tenants";

  const createUserResponse = await fetchWithBQ({
    url: createEndpoint,
    method: "POST",
    body: {
      cognitoId: user.userId,
      name: user.username,
      email: idToken?.payload?.email || "",
      phoneNumber: "",
    },
  });

  if (createUserResponse.error) {
    throw new Error("Failed to create user record");
  }

  return createUserResponse;
};

interface FAQProps {
  [key: string]: string;
}
export const predefinedAnswers: FAQProps = {
  "What is this platform?":
    "This is a real estate rental platform that connects property managers and renters. Renters can browse listings on an interactive map, apply for properties, and manage favorites. Managers can add listings, process applications, and view tenant details.",
  "Who is the app for?":
    "The app is designed for both property managers and renters. Property managers can manage listings and applications, while renters can easily find and apply for their next home.",
  "How do I add a new listing?":
    "If you are a manager, go to your dashboard and click on 'Add New Property'. Fill in the required details such as address, price, number of rooms, property type, and upload photos.",
  "How do I apply for a property?":
    "As a renter, click on a listing to view its details, then click Submit Application'. You will be asked to fill out a short application form and submit it for review.",
  "How do I favorite a property?":
    "On any property listing, click the heart icon to add it to your favorites. You can view all saved properties from your Favorites section.",
  "How is my data saved?":
    "All your data is securely stored in the cloud using AWS infrastructure. Your preferences, applications, and activity are synced across devices.",
  "Can I filter properties?":
    "Yes! You can use filters such as price, number of bedrooms, bathrooms, and property type to narrow down your search.",
  "How do I manage incoming applications?":
    "As a manager, go to your dashboard and open the 'Applications' section to review, accept, or decline tenant applications.",
  "Where can I view renters for a property?":
    "In your dashboard, select a specific listing to see the list of renters who have applied or shown interest in that property.",
  "I have a question that is not answered here.":
    "If you have additional questions, feel free to contact our support team at support@realestateapp.com.",
};
