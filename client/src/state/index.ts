import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  location: string;
  propertyType: string;
  priceRange: [number, number] | [null, null];
  squareFeet: [number, number] | [null, null];
  amenities: string[];
  beds: string;
  baths: string;
  availableFrom: string;
  coordinates: [number, number];
}
interface initialStateTypes {
  filters: FiltersState;
  isFiltersFullOpen: boolean;
  viewMode: "grid" | "list";
}

export const initialState: initialStateTypes = {
  filters: {
    location: "Los Angeles",
    propertyType: "any",
    priceRange: [null, null],
    squareFeet: [null, null],
    amenities: [],
    beds: "any",
    baths: "any",
    availableFrom: "any",
    coordinates: [-118.25, 34.05],
  },
  isFiltersFullOpen: false,
  viewMode: "grid",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    toggleFiltersFullOpen: (state) => {
      state.isFiltersFullOpen = !state.isFiltersFullOpen;
    },
    setViewMode: (state, action: PayloadAction<Partial<"grid" | "list">>) => {
      state.viewMode = action.payload;
    },
  },
});

export const { setFilters, toggleFiltersFullOpen, setViewMode } =
  globalSlice.actions;

export default globalSlice.reducer;