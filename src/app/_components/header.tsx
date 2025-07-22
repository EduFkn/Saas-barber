import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"

import SidebarSheet from "./sidebar-button"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link prefetch href="/">
          <Image alt="logo" src="/Logo.svg" height={18} width={120} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="rounded-xl p-3" variant="outline" size="default">
              <MenuIcon className="h-[21px]" />
            </Button>
          </SheetTrigger>

          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
