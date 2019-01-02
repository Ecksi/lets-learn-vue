import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import VoteMachine from '@/components/molecules/VoteMachine';

describe('VoteMachine Component', () => {
  it('is a vue instance', () => {
    const wrapper = shallowMount(VoteMachine, {
      propsData: {
        upvote: 10,
        downvote: 5,
      }
    });

    expect(wrapper.isVueInstance()).to.be.true;
  });

  it('renders with the correct props', () => {
    const wrapper = shallowMount(VoteMachine, {
      propsData: {
        upvote: 10,
        downvote: 5,
      }
    });
    const vm = wrapper.vm;

    expect(typeof vm.$props['upvote']).to.be.equal('number');
    expect(vm.$props['upvote']).to.be.equal(10);
    expect(typeof vm.$props['downvote']).to.be.equal('number');
    expect(vm.$props['downvote']).to.be.equal(5);
  });

  it('contains two Vote components', () => {
    const wrapper = shallowMount(VoteMachine, {
      propsData: {
        upvote: 10,
        downvote: 5,
      }
    });
    const voteCount = wrapper.vm.$children;

    expect(voteCount.length).to.be.equal(2);
  });

  it('listens/emits addVote event', () => {
    const wrapper = shallowMount(VoteMachine, {
      propsData: {
        upvote: 10,
        downvote: 5,
      }

    });
    const vm = wrapper.vm;

    vm.$emit('addVote', true);
    vm.$on('addVote', msg => expect(msg).to.be.true);
  })
});
