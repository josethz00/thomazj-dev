import { FormEvent, useRef, useState } from "react";
import Layout from "../components/Layout";

const InterestingLinks = (): JSX.Element => {
  const [filteredLinks, setFilteredLinks] = useState(linksArray);
  const [links] = useState(linksArray);

  const searchValueRef = useRef(null);

  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();
    const searchValue = searchValueRef.current.value;
    const filteredLinks = links.filter((link) => {
      return (link.title.toLowerCase().includes(searchValue.toLowerCase())) || (link.description.toLowerCase().includes(searchValue.toLowerCase()));
    });
    setFilteredLinks(filteredLinks);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Interesting Links</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Here are some interesting links that I&apos;ve found on the internet.
      </p>
      <form onSubmit={handleSubmitSearch}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div
          className="relative"
        >
          <div
            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              >
              </path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search..."
            required
            ref={searchValueRef}
            onChange={handleSubmitSearch}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredLinks.sort(
          (a, b) => b.dateAdded - a.dateAdded
        ).map((link) => (
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            key={link.url}
            className="rounded-md bg-black/5 dark:bg-white/5 px-6 py-4 hover:bg-[#f5f5f5] dark:hover:bg-[#1a1a1a] h-40 overflow-y-auto custom-scrollbar-w custom-scrollbar-tr custom-scrollbar-hov custom-scrollbar-handle"
          >
            <p>
              {link.title}
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {link.description}
            </p>
          </a>
        ))}
      </div>
    </Layout>
  )
};

const linksArray = [
  {
    title: "How to be antifragile for developers",
    description: "Antifragility is a concept that was introduced by Nassim Nicholas Taleb in his book Antifragile: Things That Gain from Disorder. It is the opposite of fragility, which is the tendency to break or collapse under the slightest stress. Antifragile things, on the other hand, benefit from stress and disorder.",
    url: "https://emanuelferreira.substack.com/p/how-to-be-antifragile-for-developers",
    dateAdded: new Date("2022-10-01").getTime(),
  },
  {
    title: "E2E Type Safety with GraphQL and React",
    description: "In this post, we will explore how to use GraphQL and TypeScript to create a type-safe end-to-end experience for your React application.",
    url: "https://www.prisma.io/blog/e2e-type-safety-graphql-react-3-fbV2ZVIGWg",
    dateAdded: new Date("2022-10-01").getTime(),
  },
  {
    title: "What happens when you type google.com into your browser and press Enter?",
    description: "In this video, I will explain what happens when you type google.com into your browser and press Enter.",
    url: "https://youtu.be/dh406O2v_1c",
    dateAdded: new Date("2022-10-01").getTime(),
  },
  {
    title: "MDTV Achievements Matrix",
    description: "A matrix of achievements for MDTV, a way to measure you progress as a software developer",
    url: 'https://docs.google.com/spreadsheets/d/18O_ypMhQoGTf2uQz1-eNUKIBxnH6a1BZBf_-W1sxI5Q/edit#gid=1843717713',
    dateAdded: new Date('2022-10-02').getTime(),
  },
  {
    title: "Human Search Engine",
    description: "Remember everything you read with the Human Search Engine, a method to take notes in the form of questions and answers.",
    url: 'https://sibelius.substack.com/p/human-search-engine',
    dateAdded: new Date('2022-12-02').getTime(),
  },
  {
    title: "EdgeDB",
    description: "EdgeDB is a graph-relational database with a modern and simple query language. EdgeDB compiles queries to PGSQL.",
    url: 'https://edgedb.com/',
    dateAdded: new Date('2022-22-02').getTime(),
  }
];

export default InterestingLinks;