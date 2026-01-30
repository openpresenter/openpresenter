"use client";

import React from "react";

function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <div className="flex flex-row items-start justify-between">
        <main className="flex flex-col items-start justify-start flex-1 w-full">
          {children}
        </main>
      </div>
    </React.Fragment>
  );
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutContent>{children}</LayoutContent>;
}
