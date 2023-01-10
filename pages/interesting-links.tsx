import Layout from "../components/Layout";

const InterestingLinks = (): JSX.Element => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Interesting Links</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Here are some interesting links that I&apos;ve found on the internet.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {linksArray.sort(
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
  }
];

export default InterestingLinks;