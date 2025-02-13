import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Danjo" },
    { name: "Personal Page", content: "A description of Dana's journey and work." },
  ];
};

export default function Index() {
 return (
     <>
         <p className="linkedin">
             linkedin.com/in/danj-jo
         </p>
         <p className="github">
             github.com/danj-jo
         </p>
     </>
 )
}
