import { createFileRoute } from '@tanstack/react-router';
import { ExplorePage } from '@/components/community/explore';
import { pageHead } from '@/lib/community/meta';
export const Route=createFileRoute('/explore')({head:()=>pageHead('Explore Communities','Find your people in programming, design, career advice, and more on VesitConnect.'),component:ExplorePage});
