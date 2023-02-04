import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="font-archivo">
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
