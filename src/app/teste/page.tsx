// export default function Sidebar() {
//     return (
//       <div className="flex flex-col bg-amber-300 max-w-52 h-screen">
//         <div>icon</div>
//         <div>
//           <ul>Dashboard</ul>
//           <ul>Team</ul>
//           <ul>Projects</ul>
//           <ul>Calendar</ul>
//           <ul>Documents</ul>
//           <ul>Reports</ul>
//         </div>
//       </div>
//     );
//   }
//   // components/Sidebar.js
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4 border-r border-white">
      <h2 className="text-xl font-bold mb-6">Minha Sidebar</h2>

      <nav className="flex flex-col gap-4">
        <Link href="/" className="hover:bg-gray-700 p-2 rounded">
        Dashboard
        </Link>
        <Link href="/about" className="hover:bg-gray-700 p-2 rounded">
        Projects
        </Link>
        <Link href="/contact" className="hover:bg-gray-700 p-2 rounded">
        Calendar
        </Link>
        <Link href="/about" className="hover:bg-gray-700 p-2 rounded">
        Documents
        </Link>
        <Link href="/contact" className="hover:bg-gray-700 p-2 rounded">
        Reports
        </Link>
      </nav>
    </div>
  );
}
