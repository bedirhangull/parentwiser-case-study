import { Squares2X2Icon, BookOpenIcon, UserCircleIcon, CreditCardIcon, DocumentIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from "react-native-heroicons/solid"
import COLORS from "@colors";

const MenuItems: IMenuItem[] = [
    {
        title: "Home",
        icon: <Squares2X2Icon size={24} color={COLORS.primary} />,
        status: true
    },
    {
        title: "Course",
        icon: <BookOpenIcon size={24} color={COLORS.lighGray} />,
        status: false
    },
    {
        title: "Students",
        icon: <UserCircleIcon size={24} color={COLORS.lighGray} />,
        status: false
    },
    {
        title: "Payment",
        icon: <CreditCardIcon size={24} color={COLORS.lighGray} />,
        status: false
    },
    {
        title: "Report",
        icon: <DocumentIcon size={24} color={COLORS.lighGray} />,
        status: false
    },
]

const BottomMenuItems: IMenuItem[] = [
    {
        title: "Settings",
        icon: <Cog6ToothIcon size={24} color={COLORS.lighGray} />,
        status: false
    },
    {
        title: "Logout",
        icon: <ArrowRightOnRectangleIcon size={24} color={COLORS.lighGray} />,
        status: false
    },
]

export {
    MenuItems,
    BottomMenuItems
}