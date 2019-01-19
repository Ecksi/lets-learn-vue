import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Modal from '@/components/atoms/Modal';
import sinon from 'sinon';

describe('Modal component', () => {
  const wrapper = shallowMount(Modal);

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).to.be.true;
  });

  it('takes input information properly', () => {
    // wrapper.setData({
    //   name: 'Jim',
    //   description: 'I am Jim',
    //   image_url: 'turtle'
    // });
  
    const inputs = wrapper.findAll('input')

    inputs.at(0).setValue('Jim');
    inputs.at(1).setValue('I am the Jim');
    inputs.at(2).setValue('turtle');


    expect(inputs.at(0).element.value).to.equal('Jim');
    expect(inputs.at(1).element.value).to.equal('I am the Jim');
    expect(inputs.at(2).element.value).to.equal('turtle');
    // is one better than the other?
    expect(wrapper.vm.name).to.equal('Jim');
    expect(wrapper.vm.description).to.equal('I am the Jim');
    expect(wrapper.vm.image_url).to.equal('turtle');
  });

  it('emits close event', () => {
    wrapper.vm.$emit('close');

    expect(wrapper.emitted('close')).to.be.ok;
    expect(wrapper.emitted('close').length).to.equal(1);
  });

  it('emits addFood event', () => {
    wrapper.vm.$emit('addFood');

    expect(wrapper.emitted('addFood')).to.be.ok;
    expect(wrapper.emitted('addFood').length).to.equal(1);
  });

  it('resets input fields after addFood click event', () => {
    wrapper.setData({
      name: 'Jim',
      description: 'I am Jim',
      image_url: 'turtle'
    });

    const inputs = wrapper.findAll('input')
    wrapper.find('button').trigger('click')
    console.log(wrapper.vm.$methods)

    expect(inputs.at(0).element.value).to.equal('');
    expect(inputs.at(1).element.value).to.equal('');
    expect(inputs.at(2).element.value).to.equal('');
  });
})