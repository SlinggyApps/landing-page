import Head from "next/head";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>{props.pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          // eslint-disable-next-line react/no-string-refs
          ref="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
