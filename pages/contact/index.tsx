import Link from "next/link";
import { MainLayout } from "../../components/layouts/main-layout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </MainLayout>
  );
}
