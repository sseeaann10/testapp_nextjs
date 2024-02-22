import Header from "../app/components/Header";
import Example from "./components/Example";
import Listing from "./components/Listing";
import Forms from "./components/Forms";

export default function Home() {
  return (
    <div>
      <Example />
      <Listing />
      <Forms />
    </div>
  );
}
