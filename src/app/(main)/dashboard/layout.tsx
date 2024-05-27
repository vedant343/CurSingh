"use client";
import { SubscriptionModalProvider } from "@/lib/providers/subscription-modal-provider";
import { getActiveProductsWithPrice } from "@/lib/supabase/queries";
import React, { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: fetchedProducts, error: fetchError } =
          await getActiveProductsWithPrice();
        setProducts(fetchedProducts || []);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) throw new Error(error.message);

  return (
    <main className="flex over-hidden h-screen">
      <SubscriptionModalProvider products={products}>
        {children}
      </SubscriptionModalProvider>
    </main>
  );
};

export default Layout;
