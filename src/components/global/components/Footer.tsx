import { FooterIcon } from ".";
import { EnvelopIcon, HomeIcon, NotificationIcon, SearchIcon } from "../icons";
import { IconBoxProps } from "../interfaces";

const icons: IconBoxProps[] = [
    { icon: HomeIcon, route: "" },
    { icon: SearchIcon, route: "explore" },
    { icon: NotificationIcon, route: "notifications" },
    { icon: EnvelopIcon, route: "inbox" },
];

export const Footer = () => {
    return (
        <footer className="flex border-t">
            {icons.map(({ icon, route }: IconBoxProps) => (
                <FooterIcon key={`icon-${route}`} {...{ icon, route }} />
            ))}
        </footer>
    );
};
