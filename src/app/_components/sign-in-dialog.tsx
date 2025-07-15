import Image from "next/image"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = async () => {
    await signIn("google")
  }
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça o seu login !</DialogTitle>
        <DialogDescription>Faça login na plataforma</DialogDescription>
      </DialogHeader>

      <Button
        className="gap-1 font-bold"
        variant="outline"
        onClick={handleLoginWithGoogleClick}
      >
        <Image src="/google.svg" alt="logo-google" height={18} width={18} />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
