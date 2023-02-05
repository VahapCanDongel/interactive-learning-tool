import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="font-rubik transition-all">
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
