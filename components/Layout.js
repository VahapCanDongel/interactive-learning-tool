import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="font-rubik">
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
