import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { IconBoxProps } from "../interfaces";

export const FooterIcon = ({ icon: IconElement, route }: IconBoxProps) => {
    const { pathname } = useRouter();
    const completeRoute: string = `/${route}`;
    const isRoute: boolean = pathname === completeRoute;

    const styles = clsx({
        ["text-blue-twitter"]: isRoute,
        ["text-black"]: !isRoute,
    });

    return (
        <Link href={completeRoute}>
            <a
                className={`flex items-center justify-center w-1/4 py-4 text-center cursor-pointer ${styles}`}
            >
                <IconElement className="p-px w-7 h-7" />
            </a>
        </Link>
    );
};
