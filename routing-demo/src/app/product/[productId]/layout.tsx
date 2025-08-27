import { ReactNode } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
    return <>
    
    <h2>Product layout heading</h2>
    {children}
    <h2>Product layout footer</h2>
    </>; 
}