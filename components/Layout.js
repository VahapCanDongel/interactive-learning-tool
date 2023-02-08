import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="font-rubik transition-all no-scroll">
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
