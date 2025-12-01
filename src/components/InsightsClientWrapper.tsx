"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Insights from "@/components/Insights";

const queryClient = new QueryClient();

export default function InsightsClientWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <Insights />
    </QueryClientProvider>
  );
}
