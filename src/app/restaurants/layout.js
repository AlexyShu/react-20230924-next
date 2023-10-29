import Link from "next/link";
import {restaurants} from "../../../mocks/mocks";

export default function RestaurantsLayout({ children }) {
    console.log(restaurants)
    return (
         <div>
             <div>
                 {restaurants.map((restaurant) => <Link href={`./restaurants/${restaurant.id}`}>{restaurant.name}</Link>)}
             </div>
             <div>{children}</div>
         </div>
    )
}