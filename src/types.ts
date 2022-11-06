interface BlogPostFrontmatter {
    title: string;
    date: string;
    tags?: string[];
    draft?: boolean;
}

export type {
    BlogPostFrontmatter
}