import Image from "next/image"
import { auth } from "@clerk/nextjs/server"
import { UserButton } from "@clerk/nextjs"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default async function Page() {
  await auth.protect()

  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center gap-4">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <Image src="/logo.svg" alt="Logo" width={40} height={48} />
          </EmptyMedia>
          <EmptyTitle className="text-xl">What should we build today?</EmptyTitle>
          <EmptyDescription>
            Build your own racers, shooters, puzzles and whole worlds using your
            own words. If you can describe it, you can play it.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
      <UserButton />
    </div>
  )
}