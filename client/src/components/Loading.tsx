import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="animate-spin text-black" size={48} />
    </div>
  );
};

export default Loading;