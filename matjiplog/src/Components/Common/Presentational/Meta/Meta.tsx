import { Helmet } from 'react-helmet';

interface MetaProps {
    title: string,
    description: string,
    keywords?: string,
    author?: string,
}

function Meta({ title, description, keywords, author }: MetaProps): JSX.Element {
    
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {author && <meta name="author" content={author} />}
        </Helmet>
    );
}

export default Meta;
