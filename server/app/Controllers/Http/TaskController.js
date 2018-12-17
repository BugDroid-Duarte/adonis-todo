'use strict'

const Project = use('App/Models/Project');
const Task = use('App/Models/Task');

class TaskController {

  async index({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);

    return await project.tasks().fetch();
  }

  async create({ auth, request, params }) {
    const user = await auth.getUser();
    const { description } = request.all();
    const { id } = params;

    const project = await Project.find(id);

    const task = new Task();

    task.fill({
      description,
    })

    await project.tasks().save(task);

    return task;
  }

  async destroy({ auth, request, params}) {
    const user = await auth.getUser();

    const id = params.id;
    const task = await Task.find(id);

    await task.delete();

    return task;
  }

  async update({ auth, request, params }) {

    const user = await auth.getUser();
    const { id } = params;
    const task = await Task.find(id);

    task.merge(request.only([
      'description',
      'completed'
    ]));

    await task.save();

    return task;
  }
}

module.exports = TaskController
