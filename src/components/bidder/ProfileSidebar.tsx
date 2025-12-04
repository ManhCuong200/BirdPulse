import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface ProfileSidebarProps {
    user: {
        name: string
        email: string
        avatar: string
        role: string
    }
    onEditProfile: () => void
}

export function ProfileSidebar({ user, onEditProfile }: ProfileSidebarProps) {
    const navigate = useNavigate()
    return (
        <div className="w-full md:w-1/3 lg:w-1/4">
            <Card>
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-24 w-24">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </div>
                    <CardTitle>{user.name}</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                    <div className="mt-2">
                        <Badge variant="outline" className="capitalize">{user.role}</Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full" onClick={onEditProfile}>Edit Profile</Button>
                    <Button variant="destructive" className="w-full" onClick={() => navigate("/login")}>Log Out</Button>
                </CardContent>
            </Card>
        </div>
    )
}
