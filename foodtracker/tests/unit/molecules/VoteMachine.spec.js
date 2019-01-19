import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import VoteMachine from '@/components/molecules/VoteMachine';

describe('VoteMachine Component', () => {
  const wrapper = shallowMount(VoteMachine, {
    propsData: {
      upvote: 10,
      downvote: 5,
    }
  });

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).to.be.true;
  });

  it('renders with the correct props', () => {
    const vm = wrapper.vm;

    expect(typeof vm.$props['upvote']).to.equal('number');
    expect(vm.$props['upvote']).to.equal(10);
    expect(typeof vm.$props['downvote']).to.equal('number');
    expect(vm.$props['downvote']).to.equal(5);
  });

  it('contains two Vote components', () => {
    const voteCount = wrapper.vm.$children;

    expect(voteCount.length).to.equal(2);
  });

  it('listens/emits addVote event', () => {
    const vm = wrapper.vm;

    vm.$emit('addVote', true);
    
    expect(wrapper.emitted('addVote')).to.be.ok;
    expect(wrapper.emitted('addVote').length).to.be.equal(1);
  })
});
