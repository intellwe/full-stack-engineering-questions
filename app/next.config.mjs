import withMDX from '@next/mdx';

const nextConfig = withMDX({
    extension: /\.mdx?$/
})({
    // Other Next.js configuration options
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

export default nextConfig;
