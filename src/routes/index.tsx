import { createFileRoute } from '@tanstack/react-router';
import { FeedPage } from '@/components/community/feed';
import { pageHead } from '@/lib/community/meta';
export const Route=createFileRoute('/')({head:()=>pageHead('For You','Discover thoughtful conversations, share ideas, and find your community on VesitConnect.'),component:FeedPage});
