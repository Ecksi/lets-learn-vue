import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import VoteCount from '@/components/atoms/VoteCount';

describe('VoteCount component', () => {
  it('is a vue instance', () => {
    const wrapper = shallowMount(VoteCount, {
      propsData: {
        count: 8,
        voteType: 'down',
      }
    });

    expect(wrapper.isVueInstance()).to.be.true;
  });

  it('has two span elements with correct props', () => {
    const wrapper = shallowMount(VoteCount, {
      propsData: { 
        count: 15,
        voteType: 'up',
      }
    });
    const spans = wrapper.findAll('span');

    expect(spans.length).to.be.equal(2);
    expect(spans.at(0).text()).to.equal('15');
    expect(spans.at(1).text()).to.equal('👍');
  });

  it('emits addVote event', () => {
    const wrapper = shallowMount(VoteCount, {
      propsData: { 
        count: 15,
        voteType: 'up',
      }
    });
    const vm = wrapper.vm;

    wrapper.findAll('span').at(1).trigger('click');

    vm.$emit('addVote', true);
    vm.$on('addVote', msg => expect(msg).to.be.true);
  });
})
