import { formatPrice } from "@/lib/format";

interface PriceTagProps {
    price: number,
    className?: string, 
}

export function PriceTag({price, className} : PriceTagProps){
    return <span className={`badge ${className}`}>{formatPrice(price)}</span>
}