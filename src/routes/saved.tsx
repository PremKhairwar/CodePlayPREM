import { createFileRoute } from '@tanstack/react-router';
import { FeedPage } from '@/components/community/feed';
import { pageHead } from '@/lib/community/meta';
export const Route=createFileRoute('/saved')({head:()=>pageHead('Saved Conversations','Come back to your bookmarked ideas and helpful conversations on VesitConnect.'),component:()=> <FeedPage savedOnly/>});
