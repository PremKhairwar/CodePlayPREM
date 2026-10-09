import { describe, expect, it } from 'vitest';
import { initialComments, members, commentCounts, memberTotal, setHelpfulVote, rankedMembers } from './data';

describe('Helpful reputation rules',()=>{
 const comment=initialComments[0];
 const sam=members[0];
 if(!comment||!sam)throw new Error("Missing test fixtures");
 it('adds one Yes vote to the sample 24 helpful votes',()=>{
  const votes=setHelpfulVote({},comment.id,'yes');
  expect(commentCounts(comment,votes)).toEqual({yes:25,no:2});
 });
 it('cannot count repeated Yes votes twice for the same comment',()=>{
  const votes=setHelpfulVote(setHelpfulVote({},comment.id,'yes'),comment.id,'yes');
  expect(commentCounts(comment,votes).yes).toBe(25);
  expect(Object.keys(votes)).toHaveLength(1);
 });
 it('replaces Yes with No and removes its reputation contribution',()=>{
  const votes=setHelpfulVote(setHelpfulVote({},comment.id,'yes'),comment.id,'no');
  expect(commentCounts(comment,votes)).toEqual({yes:24,no:3});
  expect(memberTotal(sam,initialComments,votes)).toBe(1284);
 });
 it('replaces No with Yes instead of retaining the previous No',()=>{
  const votes=setHelpfulVote(setHelpfulVote({},comment.id,'no'),comment.id,'yes');
  expect(commentCounts(comment,votes)).toEqual({yes:25,no:2});
 });
 it('uses Yes votes, not likes or No votes, for rankings',()=>{
  const changed=initialComments.map(c=>({...c,likes:999999,no:999999}));
  expect(memberTotal(sam,changed,{})).toBe(1284);
  expect(rankedMembers(changed,{}).map(m=>m.handle).slice(0,5)).toEqual(['codewizard','alexbuilds','designthinker','learnwithmia','techmentor']);
 });
 it('keeps leaderboard sample totals consistent with displayed comment totals',()=>{
  expect(members.slice(0,5).map(m=>memberTotal(m,initialComments,{}))).toEqual([1284,1096,942,815,702]);
  const votes=setHelpfulVote({},comment.id,'yes');
  expect(memberTotal(sam,initialComments,votes)).toBe(sam.baseYes+commentCounts(comment,votes).yes);
 });
});