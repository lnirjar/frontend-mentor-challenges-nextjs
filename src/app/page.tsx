import Link from "next/link";

type Challenge = { name: string; url: string };

const challenges: Challenge[] = [
  {
    name: "Huddle Landing Page With Single Introductory Section",
    url: "/huddle-landing-page-with-single-introductory-section",
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Frontend Mentor Challenges</h1>
      <ol className="list-decimal mt-4 ml-5">
        {challenges.map((challenge) => (
          <li key={challenge.url}>
            <Link
              href={challenge.url}
              className="hover:underline underline-offset-4"
            >
              {challenge.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
