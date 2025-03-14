import Header from "@/components/Header/header";
import { Button } from "@/components/ui/button";
import { BookOpen, Feather, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-foreground">
            <Header />
            <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="container flex justify-center items-center h-full relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-primary/60 sm:text-5xl xl:text-6xl/none">Chronicle Your Adventures
                  </h1>
                  <p className="ml-2 max-w-[600px] text-secondary md:text-xl">
                    Keep track of your RPG campaigns, NPCs, and memorable moments in one beautiful journal.
                  </p>
                </div>
                <div className="flex flex-col ml-2 gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-primary/60 hover:bg-primary/90 text-secondary">
                    <Link href="/register">Start Your Journal</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-primary/20 text-primary/60 hover:bg-primary/90">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-primary/60 rounded writing-area h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] shadow-xl">
                  <div className="flex flex-col p-6 h-full">
                    <div className="mb-4 flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-secondary">The Crimson Veil</h3>
                      <span className="text-sm text-secondary/80">Session #12</span>
                    </div>
                    <div className="prose prose-sm text-secondary/80 font-medium">
                      <p>
                        The party ventured into the ancient ruins of Drakkenheim, where they encountered a mysterious
                        figure cloaked in shadows...
                      </p>
                      <p className="mt-2">
                        Thorne discovered an ancient artifact that seemed to pulse with arcane energy. Upon closer
                        inspection...
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="text-sm font-semibold mt-4 mb-2 text-secondary">Related NPCs:</div>
                      <div className="flex gap-2">
                        <div className="rounded-md bg-black/30 px-2 py-1 text-xs text-secondary/80">Elara the Seer</div>
                        <div className="rounded-md bg-black/30 px-2 py-1 text-xs text-secondary/80">Grimshaw</div>
                        <div className="rounded-md bg-black/30 px-2 py-1 text-xs text-secondary/80">Lord Vex</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a]">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 py-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                  Features for Adventurers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to document your tabletop RPG journey
                </p>
              </div>
            </div>
              <div className="grid justify-center gap-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-8 w-8 text-primary/60" />
                  <div>
                    <h3 className="text-xl font-bold">Multiple Campaigns</h3>
                    <p className="text-muted-foreground">
                      Track as many campaigns as you&apos;re playing, each with its own dedicated space.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-primary/60" />
                  <div>
                    <h3 className="text-xl font-bold">NPC Catalog</h3>
                    <p className="text-muted-foreground">
                      Create cards for important NPCs with details, relationships, and notes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Feather className="h-8 w-8 text-primary/60" />
                  <div>
                    <h3 className="text-xl font-bold">Session Notes</h3>
                    <p className="text-muted-foreground">
                      Write and format your session notes on beautiful parchment-styled pages.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-primary/10 relative">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="container grid items-center justify-center gap-4 text-center relative z-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
                Begin Your Chronicle Today
              </h2>
              <p className="mx-auto max-w-[600px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join other adventurers who are documenting their journeys with Wanderers Journal.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild className="bg-primary/60 hover:bg-primary/90 text-secondary">
                  <Link href="/register">Create Account</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
                  <Link href="/login">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
        </div>
    )
}