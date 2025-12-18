import Newsletter from "../ui/Newsletter";

function LayoutActualite({ children }) {
  return (
    <main>
      {children}
      <Newsletter />
    </main>
  )
}
export default LayoutActualite;
