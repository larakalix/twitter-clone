import type { GetStaticProps, NextPage } from "next";

const Notifications: NextPage = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <h1>Notifications</h1>
        </div>
    );
};

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            headerTitle: "Notifications",
        },
    };
};

export default Notifications;
