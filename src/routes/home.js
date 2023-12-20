import Products from "../components/products";
import Slider from "../components/slider";

export default function Home() {
  return (
    <>
      <Slider />
      <h2
        id="trendingtitle"
        style={{
          textAlign: "center",
          fontWeight: "Bold",
          color: "White",
          marginBottom: "-100px",
        }}
      >
        New & Trending
      </h2>
      <Products />
    </>
  );
}
