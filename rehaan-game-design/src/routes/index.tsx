import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import heroBg from "@/assets/hero-bg.jpg";
import thirdPlaceImg from "@/assets/third-place.jpg";
import psychologyImg from "@/assets/psychology.jpg";
import concertImg from "@/assets/concert.jpg";
import sandboxImg from "@/assets/sandbox.jpg";
import eulaImg from "@/assets/eula.jpg";
import avatarImg from "@/assets/avatar.gif";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Games as a Social Space" },
      {
        name: "description",
        content:
          "An exploration of multiplayer environments as modern third places — community, identity, and shared digital economies.",
      },
      { property: "og:title", content: "Games as a Social Space" },
      {
        property: "og:description",
        content:
          "An exploration of multiplayer environments as modern third places.",
      },
    ],
  }),
  component: Index,
});

type Chapter = {
  n: string;
  kicker: string;
  title: React.ReactNode;
  image: string;
  alt: string;
  body: React.ReactNode;
  imageLeft?: boolean;
  aspectClass?: string;
};

function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="underline-offset-4 hover:underline"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function SourceTag({
  label,
  href,
}: {
  label: string;
  href?: string;
}) {
  const Tag = href ? "a" : "span";
  return (
    <Tag
      {...(href
        ? { href, target: "_blank", rel: "noreferrer" }
        : {})}
      className="inline-flex items-center gap-2 rounded-full border hairline bg-card px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span>Source Used: {label}</span>
    </Tag>
  );
}

function Index() {
  useReveal();

  const chapters: Chapter[] = [
    {
      n: "01",
      kicker: "Intro",
      title: (
        <>
          From software we play to <span className="text-muted-foreground">places we inhabit.</span>
        </>
      ),
      image: thirdPlaceImg,
      alt: "Empty café interior at dusk",
      body: (
        <>
          <p>
            Video games have transitioned from being pure software we play to places we
            inhabit. In a world where recreational activities are almost always costly,
            people often find it hard to socialise in places other than cafés or
            restaurants. Although video games used to carry a negative tag — considered
            mere entertainment or escape — they're now places where people talk, build
            relationships, and express identity.
          </p>
          <p>
            For many players, joining a video game feels like entering a familiar social
            space — an alternative to paid meetups. Games like Minecraft, Fortnite, and
            Red Dead Redemption 2 show how gaming has become part of everyday life,
            building communities of its own.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <SourceTag
              label="Steinkuehler & Williams — online games as third places"
              href="https://academic.oup.com/jcmc/article/11/4/885/4617703"
            />
          </div>
        </>
      ),
    },
    {
      n: "02",
      kicker: "The Framework",
      title: (
        <>
          What are <span className="text-muted-foreground">third places?</span>
        </>
      ),
      image: eulaImg,
      alt: "Soft blue light through chain link",
      imageLeft: true,
      body: (
        <>
          <p>
            Third places are social environments outside one's home (first place) and
            school or work (second place) — parks, restaurants, cafés, public libraries.
            Communal grounds where one can relax and feel a sense of belonging without
            necessarily having to spend money.
          </p>
          <p>
            Urbanisation and the cost of living are causing many of these physical places
            to disappear. Online games and digital platforms now offer the same affordance:
            interfaces that feel like physical social spaces, with the added ability to
            communicate fluidly and express identity through skins and costumes. Video
            games have the capacity to be a new third place for informal socialising.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <SourceTag
              label="Steinkuehler & Williams — online games as third places"
              href="https://academic.oup.com/jcmc/article/11/4/885/4617703"
            />
          </div>
        </>
      ),
    },
    {
      n: "03",
      kicker: "Psychology",
      title: (
        <>
          Connection, rendered <span className="text-muted-foreground">through an avatar.</span>
        </>
      ),
      image: psychologyImg,
      alt: "Glowing network of connection points",
      body: (
        <>
          <p>
            A psychology study by Kowert, Domahidi, and Quandt found that online games
            can help players form friendships, especially for people who feel less
            comfortable in face-to-face social situations. Because games allow
            communication through avatars, text chat, voice chat, and shared goals,
            socialising feels less intimidating.
          </p>
          <p>
            This supports the idea that games are not just entertainment, but digital
            spaces where players can build confidence, connection, and a sense of
            belonging.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <SourceTag label="Kowert et al. — gaming-related friendships" />
          </div>
        </>
      ),
    },
    {
      n: "04",
      kicker: "The Shift",
      title: (
        <>
          The death of the <span className="text-muted-foreground">win-condition.</span>
        </>
      ),
      image: concertImg,
      alt: "Empty stadium lit by stage lights",
      imageLeft: true,
      body: (
        <>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Case Study A — Fortnite's Party Royale
          </p>
          <p>
            For a long time, video games revolved around scores, timers, lives, and
            explicit wins or losses. Contemporary gaming has shifted away from this.
            Players now log in just to experience the environment.
          </p>
          <p>
            Fortnite is traditionally a battle royale — a competitive space where players
            earn points by eliminating others. In 2020, Epic Games introduced Party
            Royale: a weaponless space for skydiving and live events. When Travis Scott
            brought his virtual concert there, 12.3 million people queued up to witness
            it. No combat. No competition. DJ Marshmello's 2019 set drew 10.7 million.
            What once seemed absurd is now routine.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <SourceTag
              label="Variety — Fortnite live event audience numbers"
              href="https://variety.com/2020/digital/news/travis-scott-fortnite-record-viewers-live-1234589033/"
            />
            <SourceTag
              label="ExitLag — Fortnite Party Royale"
              href="https://www.exitlag.com/blog/fortnite-party-royale/"
            />
          </div>
        </>
      ),
    },
    {
      n: "05",
      kicker: "The Sandbox",
      title: (
        <>
          Decentralised <span className="text-muted-foreground">neighbourhoods.</span>
        </>
      ),
      image: sandboxImg,
      alt: "Translucent floating blocks",
      body: (
        <>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Case Study B — Minecraft &amp; Roblox
          </p>
          <p>
            In Minecraft creative servers or Roblox hangout worlds, the game is entirely
            blank when you first enter. Players treat these platforms less like software
            and more like digital Lego sets — the true objective is to express creativity
            and engage in conversation.
          </p>
          <p>
            Users build experiences that other users can step into. They shop, converse,
            and navigate roughly 40 million different experiences — building a virtual
            house together is the equivalent of hanging out in the neighbourhood.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <SourceTag
              label="Metavert Meditations — creator-driven worlds"
              href="https://meditations.metavert.io/p/creator-driven-worlds-are-taking"
            />
          </div>
        </>
      ),
    },
    {
      n: "06",
      kicker: "Identity",
      title: (
        <>
          The avatar as <span className="text-muted-foreground">a mirror.</span>
        </>
      ),
      image: avatarImg,
      alt: "Avatar self-expression in a digital space",
      imageLeft: true,
      aspectClass: "aspect-[3/4]",
      body: (
        <>
          <p>
            Character creation is more than choosing a costume. In many games, players
            use avatars, skins, outfits, usernames, and emotes to explore different
            versions of themselves. They can try on styles, personalities, and identities
            that they may hesitate to express in real life.
          </p>
          <p>
            Games create a kind of personal external world, where the player becomes the
            main character. Through anonymity and freedom, players can control how they
            appear, how they move, and how they are recognised by others. This makes
            gaming a space for self-expression, where identity can be tested without the
            same pressure, judgement, or social limits that exist offline.
          </p>
          <p>
            In this way, the avatar becomes a mirror. It reflects not only who the player
            is, but also who they might want to become.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <SourceTag
              label="Dean & Francis Press — avatar & identity in games"
              href="https://www.deanfrancispress.com/index.php/hc/article/view/1544"
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-background/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <span className="text-sm font-medium tracking-tight">Games as a Social Space</span>
          <div className="hidden items-center gap-10 text-xs font-light text-muted-foreground md:flex">
            <a href="#intro" className="transition-opacity hover:opacity-60">Intro</a>
            <a href="#chapters" className="transition-opacity hover:opacity-60">Chapters</a>
            <a href="#limits" className="transition-opacity hover:opacity-60">Limits</a>
            <a href="#evaluation" className="transition-opacity hover:opacity-60">Evaluation</a>
            <a href="#references" className="transition-opacity hover:opacity-60">References</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
          <p className="reveal mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            A Game Design Project
          </p>
          <h1 className="reveal text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
            Games as a<br />Social Space.
          </h1>
          <p className="reveal mx-auto mt-10 max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            Where play becomes a place, and the people you meet there know your heart.
          </p>
          <div className="reveal mt-14">
            <a
              href="#intro"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:opacity-90"
            >
              Enter the Space
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </div>
      </section>

      {/* Thesis / Argument */}
      <section id="intro" className="border-t hairline px-8 pt-40 pb-24">
        <div className="mx-auto max-w-5xl">
          <p className="reveal mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
            The Argument
          </p>
          <p className="reveal text-balance text-2xl font-light leading-[1.35] tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            This project argues that online games now function as{" "}
            <span className="font-semibold">digital third places</span> — social
            environments where players build friendships, express identity, and
            experience belonging. However, these spaces are also shaped by
            corporate control, exclusion, and overuse.
          </p>
        </div>
      </section>

      {/* Chapters anchor */}
      <div id="chapters" />

      {chapters.map((c, i) => (
        <section
          key={c.n}
          className={`px-8 ${i === 0 ? "pt-48 pb-32" : "py-32"} ${
            i !== 0 ? "border-t hairline" : ""
          }`}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-20">
            {/* Image */}
            <div
              className={`${
                c.imageLeft ? "md:order-1 md:col-span-6" : "md:order-2 md:col-span-6 md:col-start-7"
              }`}
            >
              <div className="reveal overflow-hidden rounded-2xl border hairline">
                <img
                  src={c.image}
                  alt={c.alt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Text */}
            <div
              className={`${
                c.imageLeft ? "md:order-2 md:col-span-5 md:col-start-8" : "md:order-1 md:col-span-5"
              }`}
            >
              <div className="reveal flex items-center gap-4">
                <span className="text-xs font-medium tracking-widest text-primary">{c.n}</span>
                <span className="h-px w-10 bg-border" />
                <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  {c.kicker}
                </span>
              </div>
              <h2 className="reveal mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                {c.title}
              </h2>
              <div className="reveal mt-8 space-y-6 text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                {c.body}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Hostile Lobbies */}
      <section id="hostile" className="border-t hairline px-8 py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <div className="reveal flex items-center gap-4">
              <span className="text-xs font-medium tracking-widest text-primary">07</span>
              <span className="h-px w-10 bg-border" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                The Other Side
              </span>
            </div>
            <h2 className="reveal mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Hostile <span className="text-muted-foreground">lobbies.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="reveal space-y-6 text-base font-light leading-relaxed text-foreground/90 sm:text-lg">
              <p>
                Online games can also reproduce real-world problems such as
                harassment, toxic voice chat, racism, sexism, homophobia, and
                gatekeeping. This means games may act like social spaces, but
                not everyone experiences them as safe or welcoming.
              </p>
              <p>
                A third place is only as inclusive as the people who hold its
                door open. When that door is guarded by hostility, the
                invitation to belong quietly turns into a test of who is
                allowed to stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limits / Illusion of public space */}
      <section id="limits" className="border-t hairline px-8 py-48">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 max-w-3xl">
            <p className="reveal mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Complexities &amp; Limitations
            </p>
            <h2 className="reveal text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              The cost of the <span className="text-muted-foreground">always-open door.</span>
            </h2>
            <p className="reveal mt-8 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
              These spaces offer profound social comfort, but they are not without
              consequence. The same architecture that lowers the bar to connection can
              also blur the line between time spent and time lost.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border hairline bg-border md:grid-cols-3">
            {[
              {
                n: "i.",
                title: "Time and attention",
                body: "Frictionless access can tip into compulsive use. Sessions stretch from a quick hangout into hours, eroding sleep, study, and obligations that sit outside the screen.",
              },
              {
                n: "ii.",
                title: "Reality drift",
                body: "When the in-game world becomes more reliable than the one outside, players can begin to live mentally inside it — treating the offline world as the secondary place, not the primary one.",
              },
              {
                n: "iii.",
                title: "Rented ground",
                body: "These third places are corporate-owned. Access is monetised, moderated, and revocable by EULA — democratic in feel, but never quite public in the way a park or library is.",
              },
            ].map((f) => (
              <article
                key={f.n}
                className="reveal group flex flex-col justify-between bg-card p-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-card/60 md:min-h-[26rem] md:p-14"
              >
                <span className="text-xs font-medium tracking-widest text-primary">{f.n}</span>
                <div className="mt-20">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{f.title}</h3>
                  <p className="mt-5 text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                    {f.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation / Conclusion */}
      <section id="evaluation" className="border-t hairline px-8 py-48">
        <div className="mx-auto max-w-4xl">
          <p className="reveal mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Evaluation
          </p>
          <h2 className="reveal text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            On balance, the door is <span className="text-muted-foreground">worth walking through.</span>
          </h2>
          <div className="reveal mt-12 space-y-6 text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
            <p>
              For all their complications, the positive impact of games as social spaces
              appears to outweigh the negatives. Even though these worlds are centralised
              and corporately owned, they still hand millions of people a place to express
              themselves, socialise, and connect — with fun built into the same gesture.
              They offer a low-stakes outlet for stress, a release from the pressure of
              the day, and a sense of company that is often easier to access than its
              offline equivalent.
            </p>
            <p>
              That said, value here is conditional on moderation. Players who lose
              themselves in these third worlds for too long can begin to disconnect from
              the physical one, and prolonged immersion has been linked to compulsive
              behaviour and a softened grip on reality. Used with intention, games are a
              place to gather. Used without it, they become a place to disappear.
            </p>
          </div>
          <div className="reveal mt-10 flex flex-wrap gap-3">
            <SourceTag
              label="Acta Psychologica (2023) — gaming, well-being & problematic use"
              href="https://www.sciencedirect.com/science/article/pii/S0001691823002238"
            />
            <SourceTag
              label="PMC / NIH — gaming behaviour, mental health & problematic use"
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12679145/"
            />
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="px-8 py-48">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="reveal text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            "Online friends are not <span className="text-muted-foreground">'lesser' friends.</span> They are simply people you met in a different world who know your heart just as well as the ones you pass every day."
          </h2>
        </div>
      </section>

      {/* References */}
      <section id="references" className="border-t hairline px-8 py-32">
        <div className="mx-auto max-w-4xl">
          <p className="reveal mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Bibliography
          </p>
          <h2 className="reveal text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
            References.
          </h2>
          <ol className="reveal mt-12 space-y-6 text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            <li>
              Kowert, R., Domahidi, E., &amp; Quandt, T. (2014).{" "}
              <em>
                The Relationship Between Online Video Game Involvement and
                Gaming-Related Friendships Among Emotionally Sensitive Individuals.
              </em>{" "}
              Cyberpsychology, Behavior, and Social Networking.
            </li>
            <li>
              Steinkuehler, C. A., &amp; Williams, D. (2006). Where Everybody Knows Your
              (Screen) Name: Online Games as "Third Places." <em>Journal of
              Computer-Mediated Communication</em>, 11(4), 885–909.{" "}
              <Cite href="https://academic.oup.com/jcmc/article/11/4/885/4617703">
                https://academic.oup.com/jcmc/article/11/4/885/4617703
              </Cite>
            </li>
            <li>
              Variety. (2020). <em>Travis Scott's Fortnite Concert Draws Record 12.3
              Million Concurrent Viewers.</em>{" "}
              <Cite href="https://variety.com/2020/digital/news/travis-scott-fortnite-record-viewers-live-1234589033/">
                https://variety.com/2020/digital/news/travis-scott-fortnite-record-viewers-live-1234589033/
              </Cite>
            </li>
            <li>
              ExitLag. <em>Fortnite Party Royale: The Social Side of Fortnite.</em>{" "}
              <Cite href="https://www.exitlag.com/blog/fortnite-party-royale/">
                https://www.exitlag.com/blog/fortnite-party-royale/
              </Cite>
            </li>
            <li>
              Metavert Meditations. <em>Creator-Driven Worlds Are Taking Over.</em>{" "}
              <Cite href="https://meditations.metavert.io/p/creator-driven-worlds-are-taking">
                https://meditations.metavert.io/p/creator-driven-worlds-are-taking
              </Cite>
            </li>
            <li>
              Dean &amp; Francis Press. <em>Avatar, Identity and Self-Expression in
              Video Games.</em> Humanities and Social Sciences Communications.{" "}
              <Cite href="https://www.deanfrancispress.com/index.php/hc/article/view/1544">
                https://www.deanfrancispress.com/index.php/hc/article/view/1544
              </Cite>
            </li>
            <li>
              <em>Acta Psychologica</em> (2023). Study on video gaming, well-being and
              problematic engagement.{" "}
              <Cite href="https://www.sciencedirect.com/science/article/pii/S0001691823002238">
                https://www.sciencedirect.com/science/article/pii/S0001691823002238
              </Cite>
            </li>
            <li>
              PMC / NIH. <em>Gaming behaviour, mental health and problematic use.</em>{" "}
              <Cite href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12679145/">
                https://pmc.ncbi.nlm.nih.gov/articles/PMC12679145/
              </Cite>
            </li>
          </ol>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t hairline px-8 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium tracking-tight">Games as a Social Space</p>
          </div>
          <div className="flex flex-col gap-2 text-xs font-light text-muted-foreground md:flex-row md:gap-10">
            <span>Rehaan Goyal · 1811174</span>
            <a href="#references" className="transition-opacity hover:opacity-60">References</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
