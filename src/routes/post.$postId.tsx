import { createFileRoute } from '@tanstack/react-router';
import { DiscussionPage } from '@/components/community/discussion';
import { pageHead } from '@/lib/community/meta';
import { posts } from '@/lib/community/data';
export const Route=createFileRoute('/post/$postId')({head:({params})=>pageHead(posts.find(p=>p.id===params.postId)?.title??'Community Conversation','Join the conversation and recognize genuinely helpful answers on VesitConnect.'),component:PostPage});
function PostPage(){const {postId}=Route.useParams();return <DiscussionPage postId={postId}/>}
