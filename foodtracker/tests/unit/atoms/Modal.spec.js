import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Modal from '@/components/atoms/Modal';

describe('Modal component', () => {
  it('is a vue instance', () => {
    const wrapper = shallowMount(Modal);

    expect(wrapper.isVueInstance()).to.be.true;
  });

  it('takes input information properly', () => {

  });

  it('emits close event', () => {
    const wrapper = shallowMount(Modal);
    console.log(wrapper.vm.$data.name)
    console.log(wrapper.findAll('input').at(0).element.value)
    wrapper.setData({ name: 'troll' })
    console.log(wrapper.vm.$data.name)
    console.log(wrapper.findAll('input').at(0).element.value)


    wrapper.vm.$emit('close', 'food name', 'a description', 'image')
    expect(wrapper.emitted('close')).to.be.ok;
    expect(wrapper.emitted('close').length).to.be.equal(1);
  });

  it('emits addFood event', () => {

  });

  it('resets input fields after addFood click event', () => {

  });
  // close button closes modal
  // inputs take in information properly
  // it emits an addFood event w/ name, description, image
  // resets input fields after fetch call
  // in the future add validator 
    // name & description must have length
})