import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import BlurFade from "./magicui/blur-fade";
import { Container } from "./craft";

const reviews = [
  {
    name: "Amogelang Moatswi",
    username: "@amoRecycles",
    body: "ReVend has made recycling so easy. The app's rewards and leaderboard keep me motivated to recycle more!",
    img: "https://avatar.vercel.sh/amogelang",
  },
  {
    name: "Tafadzwa Chigwada",
    username: "@tafRecycle",
    body: "I love how simple and rewarding ReVend makes recycling. Tracking my progress in real-time is a game-changer!",
    img: "https://avatar.vercel.sh/tafadzwa",
  },
  {
    name: "Marang Pholo",
    username: "@marangGreen",
    body: "ReVend’s personalized insights have really improved my recycling habits. It’s fun and impactful!",
    img: "https://avatar.vercel.sh/marang",
  },
  {
    name: "Mpho Sethibe",
    username: "@mphoRecycles",
    body: "The rewards and leaderboard keep me coming back. ReVend makes recycling more engaging than ever!",
    img: "https://avatar.vercel.sh/mpho",
  },
  {
    name: "Karabo",
    username: "@karaboGreen",
    body: "ReVend makes recycling part of my routine. The app is user-friendly, and the rewards are a great incentive!",
    img: "https://avatar.vercel.sh/karabo",
  },
  {
    name: "Theo Motsisi",
    username: "@theoEco",
    body: "ReVend has taken my recycling to the next level. The leaderboard adds a fun, competitive edge!",
    img: "https://avatar.vercel.sh/theo",
  },
  {
    name: "Motswana Letsile",
    username: "@motsGreen",
    body: "With ReVend, recycling is quick and rewarding. The app’s ease of use makes it a daily habit for me.",
    img: "https://avatar.vercel.sh/motswana",
  },
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <Container>
      <BlurFade delay={0.25} inView>
      <div>
      <a className="inline-flex w-fit items-center text-xs p-1 border rounded-full font-medium duration-150 hover:bg-gray-100">
      <span className="inline-block text-xs rounded-full px-2 py-1 bg-green-500 text-white">
      Testimonials
     </span>
      </a>
        <h2 className="text-3xl mt-2 sm:text-4xl font-normal text-green-700">
        What Our Users Are Saying
        </h2>
        <p className="text-base font-medium mt-2 text-gray-500">
        Hear from our community about how ReVend has transformed their recycling experience. From effortless recycling and rewarding incentives to personalized insights and friendly competition, our users share how the app has made a meaningful impact on their daily lives and environmental contributions.
        </p>
      </div> 

    <div className="relative flex mt-24 w-full flex-col items-center justify-center overflow-hidden bg-background md:mt-10 sm:mt-3">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </BlurFade>
    </Container>
  );
}
