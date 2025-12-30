import headerLinks from "@/components/Header/headerLink";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-8 p-8 rounded-lg shadow-lg bg-white dark:bg-zinc-900 transition-colors">
      <h1 
        className="text-3xl md:text-4xl font-bold mb-8 text-left text-gray-800 dark:text-gray-100"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(9, 100, 236, 1) 7%, rgba(255, 255, 255, 1) 78%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          border: 'none',
        }}
      >
        ドキュメント目次
      </h1>
      <nav>
        <ul className="space-y-6">
          {headerLinks.map((doc) => (
            <li key={doc.href}>
            <a
                href={doc.href}
              className="block px-6 py-4 rounded-md text-lg font-medium shadow hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors border border-gray-200 dark:border-zinc-800"
            >
              <span role="img" aria-label="document" className="mr-2">📄</span>
              {doc.title}
            </a>
          </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
