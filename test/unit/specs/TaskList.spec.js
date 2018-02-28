/* eslint no-unused-expressions: 0 */
import Vue from 'vue'
import TaskList from '@/components/TaskList'
import { Task } from '@/models/Task'

var chai = require('chai')
var expect = chai.expect // preference and tested with expect

chai.use(require('chai-sorted'))

function getMountedComponent (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({propsData}).$mount()
  return vm
}

describe('TaskList.vue', () => {
  let vm = {}

  beforeEach(function () {
    let taskList = []

    let task = new Task()
    task.title = 'Buy Chicken'

    let task2 = new Task()
    task2.title = 'Buy Potato'

    let task3 = new Task()
    task3.title = 'Buy Cheese'

    taskList.push(task)
    taskList.push(task2)
    taskList.push(task3)

    vm = getMountedComponent(TaskList, {
      todoList: taskList
    })
  })

  it('should render correct contents', () => {
    expect(vm.todoList.length).to.equal(3)
  })

  it('should sort the tasks', () => {
    expect(vm.todoList).to.be.sortedBy('title')
  })
})
