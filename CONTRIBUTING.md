# Contributing to Docusaurus

[Docusaurus](https://docusaurus.io) is our way to hopefully help make open source documentation easier. We currently have [multiple open source projects using it](https://docusaurus.io/showcase), with many more planned. If you're interested in contributing to Docusaurus, hopefully, this document makes the process for contributing clear.

The [Open Source Guides](https://opensource.guide/) website has a collection of resources for individuals, communities, and companies who want to learn how to run and contribute to an open source project. Contributors and people new to open source alike will find the following guides especially useful:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Building Welcoming Communities](https://opensource.guide/building-community/)

## 行为准则

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

## 参与

There are many ways to contribute to Docusaurus, and many of them do not involve writing any code. Here's a few ideas to get started:

- Simply start using Docusaurus. Go through the [Getting Started](https://docusaurus.io/docs/installation) guide. Does everything work as expected? If not, we're always looking for improvements. Let us know by [opening an issue](#issues).
- Look through the [open issues](https://github.com/facebook/docusaurus/issues). Provide workarounds, ask for clarification, or suggest labels. Help [triage issues](#triaging-issues-and-pull-requests).
- If you find an issue you would like to fix, [open a pull request](#pull-requests). Issues tagged as [_Good first issue_](https://github.com/facebook/docusaurus/labels/Good%20first%20issue) are a good place to get started.
- Read through the [Docusaurus docs](https://docusaurus.io/docs/installation). If you find anything that is confusing or can be improved, you can click "Edit this page" at the bottom of most docs, which takes you to the GitHub interface to make and propose changes.
- Take a look at the [features requested](https://github.com/facebook/docusaurus/labels/feature) by others in the community and consider opening a pull request if you see something you want to work on.

Contributions are very welcome. If you think you need help planning your contribution, please ping us on Twitter at [@docusaurus](https://twitter.com/docusaurus) and let us know you are looking for a bit of help.

### 加入我们的 Discord 通道

We have the [`#contributors`](https://discord.gg/6g6ASPA) channel on [Discord](https://discord.gg/docusaurus) to discuss all things about Docusaurus development. You can also be of great help by helping other users in the [`#help-and-questions`](https://discord.gg/fwbcrQ3dHR) channel.

### 分类问题和拉取请求

One great way you can contribute to the project without writing any code is to help triage issues and pull requests as they come in.

- Ask for more information if you believe the issue does not provide all the details required to solve it.
- Suggest [labels](https://github.com/facebook/docusaurus/labels) that can help categorize issues.
- Flag issues that are stale or that should be closed.
- Ask for test plans and review code.

## 我们的发展过程

Docusaurus uses [GitHub](https://github.com/facebook/docusaurus) as its source of truth. The core team will be working directly there. All changes will be public from the beginning.

All pull requests will be checked by the continuous integration system, GitHub actions. There are unit tests, end-to-end tests, performance tests, style tests, and much more.

### 分支机构

Docusaurus has one primary branch `main` and we use feature branches with deploy previews to deliver new features with pull requests.

## 问题

When [opening a new issue](https://github.com/facebook/docusaurus/issues/new/choose), always make sure to fill out the issue template. **This step is very important!** Not doing so may result in your issue not being managed in a timely fashion. Don't take this personally if this happens, and feel free to open a new issue once you've gathered all the information required by the template.

**Please don't use the GitHub issue tracker for questions.** If you have questions about using Docusaurus, use any of our [support channels](https://docusaurus.io/community/support), and we will do our best to answer your questions.

### 错误

We use [GitHub Issues](https://github.com/facebook/docusaurus/issues) for our public bugs. If you would like to report a problem, take a look around and see if someone already opened an issue about it. If you are certain this is a new, unreported bug, you can submit a [bug report](https://github.com/facebook/docusaurus/issues/new?assignees=&labels=bug%2Cstatus%3A+needs+triage&template=bug.yml).

- **One issue, one bug:** Please report a single bug per issue.
- **Provide reproduction steps:** List all the steps necessary to reproduce the issue. The person reading your bug report should be able to follow these steps to reproduce your issue with minimal effort.

If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend filing an issue detailing what you're fixing. This is helpful in case we don't accept that specific fix but want to keep track of the issue.

### 安全漏洞

Facebook has a [bounty program](https://www.facebook.com/whitehat/) for the safe disclosure of security bugs. With that in mind, please do not file public issues; go through the process outlined on that page.

### 特性请求

If you would like to request a new feature or enhancement but are not yet thinking about opening a pull request, you can file an issue with the [feature template](https://github.com/facebook/docusaurus/issues/new?assignees=&labels=feature%2Cstatus%3A+needs+triage&template=feature.yml) in the form of an **elaborated RFC**. Alternatively, you can use the [Canny board](https://docusaurus.io/feature-requests) for more casual feature requests and gain enough traction before proposing an RFC.

### 建议

If you intend to make any non-trivial changes to existing implementations, we recommend filing an issue with the [proposal template](https://github.com/facebook/docusaurus/issues/new?assignees=&labels=proposal%2Cstatus%3A+needs+triage&template=proposal.yml). This lets us reach an agreement on your proposal before you put significant effort into it. These types of issues should be rare.

### 声称问题

We have a list of [beginner-friendly issues](https://github.com/facebook/docusaurus/labels/good%20first%20issue) to help you get your feet wet in the Docusaurus codebase and familiar with our contribution process. This is a great place to get started.

Apart from the `good first issue`, the following labels are also worth looking at:

- [`help wanted`](https://github.com/facebook/docusaurus/labels/help%20wanted): if you have specific knowledge in one domain, working on these issues can make your expertise shine.
- [`status: accepting pr`](https://github.com/facebook/docusaurus/labels/status%3A%20accepting%20pr): community contributors can feel free to claim any of these.

If you want to work on any of these issues, just drop a message saying "I'd like to work on this", and we will assign the issue to you and update the issue's status as "claimed". **You are expected to send a pull request within seven days** after that, so we can still delegate the issue to someone else if you are unavailable.

Alternatively, when opening an issue, you can also click the "self service" checkbox to indicate that you'd like to work on the issue yourself, which will also make us see the issue as "claimed".

## 发展

### 在线一键设置投稿

你可以使用 Gitpod(一个免费的，在线的，类似 VS code 的 IDE)来贡献。只需点击一下，它就会启动一个工作区(用于 Docusaurus 2)，并自动:

- 克隆 docusaurus 库。
- 安装依赖项。
- 运行 `yarn start`

这样你就可以马上开始贡献了。

[![在Gitpod中打开](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/facebook/docusaurus)

你也可以尝试使用新的[github.dev](https://github.dev/facebook/docusaurus)功能。当你浏览任何文件时，将域名从`github.com`更改为`github.dev`将把你的浏览器变成一个在线编辑器。您可以立即开始更改并发送拉取请求。

### 安装

1. 确保你已经安装了[Yarn](https://yarnpkg.com/)。
2. 克隆存储库之后，在存储库的根目录下运行`yarn install`。这将安装所有依赖项并构建所有本地包。
3. 要启动开发服务器，请运行 `yarn workspace website start`.

### 编码规范

- **最重要的是:环顾四周。** 与项目其余部分中使用的样式相匹配。这包括格式化、命名文件、在代码中命名东西、在文档中命名东西等等。
- "Attractive"
- 我们确实有 Prettier(一个格式化器)和 ESLint(一个语法检查器)来捕捉大多数风格问题。如果你在本地工作，他们应该在每次 git 提交时自动修复一些问题。
- **为文档**: 不要在 80 个字符处换行-在编辑文档时将编辑器配置为软换行。

一般来说，不要过于担心样式——维护人员会在检查代码时帮助您修复样式。

## 拉请求

So you have decided to contribute code back to upstream by opening a pull request. You've invested a good chunk of time, and we appreciate it. We will do our best to work with you and get the PR looked at.

Working on your first Pull Request? You can learn how from this free video series:

[**How to Contribute to an Open Source Project on GitHub**](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

Please make sure the following is done when submitting a pull request:

1. **保持小规模的 PR。** Small pull requests (~300 lines of diff) are much easier to review and more likely to get merged. Make sure the PR does only one thing, otherwise please split it.
2. **使用描述性的标题。** It is recommended to follow this [commit message style](#semantic-commit-messages).
3. **测试您的更改。** Describe your [**test plan**](#test-plan) in your pull request description.
4. **CLA.** If you haven't already, [sign the CLA](https://code.facebook.com/cla).

所有的拉取请求都应该在`main`分支上打开。

We have a lot of integration systems that run automated tests to guard against mistakes. The maintainers will also review your code and fix obvious issues for you. These systems' duty is to make you worry as little about the chores as possible. Your code contributions are more important than sticking to any procedures, although completing the checklist will surely save everyone's time.

### 语义提交消息

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional. If your change is specific to one/two packages, consider adding the scope. Scopes should be brief but recognizable, e.g. `content-docs`, `theme-classic`, `core`

The various types of commits:

- `feat`: a new API or behavior **for the end user**.
- `fix`: a bug fix **for the end user**.
- `docs`: a change to the website or other Markdown documents in our repo.
- `refactor`: a change to production code that leads to no behavior difference, e.g. splitting files, renaming internal variables, improving code style...
- `test`: adding missing tests, refactoring tests; no production code change.
- `chore`: upgrading dependencies, releasing new versions... Chores that are **regularly done** for maintenance purposes.
- `misc`: anything else that doesn't change production code, yet is not `test` or `chore`. e.g. updating GitHub actions workflow.

Do not get too stressed about PR titles, however. Your PR will be squash-merged and your commit to the `main` branch will get the title of your PR, so commits within a branch don't need to be semantically named. The maintainers will help you get the PR title right, and we also have a PR label system that doesn't equate with the commit message types. Your code is more important than conventions!

例子:

```
feat(core): allow overriding of webpack config
^--^^----^  ^------------^
|   |       |
|   |       +-> Summary in present tense. Use lower case not title case!
|   |
|   +-> The package(s) that this change affected.
|
+-------> Type: see above for the list we use.
```

### 版本化文档

If you only want to make doc changes, you just need to be aware of versioned docs.

- `website/docs` - The files here are responsible for the "next" version at https://docusaurus.io/docs/next/installation.
- `website/versioned_docs/version-X.Y.Z` - These are the docs for the X.Y.Z version at https://docusaurus.io/docs/X.Y.Z/installation.

Do not edit the auto-generated files within `versioned_docs/` or `versioned_sidebars/` unless you are sure it is necessary. For example, information about new features should not be documented in versioned docs. Edits made to older versions will not be propagated to newer versions of the docs.

### 测试计划

A good test plan has the exact commands you ran and their output and provides screenshots or videos if the pull request changes UI. If you've changed APIs, update the documentation.

Tests are integrated into our continuous integration system, so you don't always need to run local tests. However, for significant code changes, it saves both your and the maintainers' time if you can do exhaustive tests locally first to make sure your PR is in good shape. There are many types of tests:

- **Build and typecheck.** We use TypeScript in our codebase, which can make sure your code is consistent and catches some obvious mistakes early.
- **Unit tests.** We use [Jest](https://jestjs.io/) for unit tests of API endpoints' behavior. You can run `yarn test` in the root directory to run all tests, or `yarn test path/to/your/file.test.ts` to run a specific test.
- **Dogfooding.** Our website itself covers all kinds of potential configuration cases and we even have a dedicated [tests area](https://docusaurus.io/tests). Don't be afraid to update our website's configuration in your PR—it can help the maintainers preview the effects. We can decide if the website change should be kept when merging and deploying for production.
- **E2E tests.** You can simulate the distribution and installation of the code with your fresh changes. If you need help testing your changes locally, you can check out the doc on doing [local third-party testing](https://github.com/facebook/docusaurus/blob/main/admin/local-third-party-project-testing.md).

### 许可

By contributing to Docusaurus, you agree that your contributions will be licensed under its MIT license. Copy and paste this to the top of your new file(s):

```js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
```

This is also auto-fixable with the `header/header` ESLint rule.

### 贡献者许可协议 (CLA)

In order to accept your pull request, we need you to submit a CLA. You only need to do this once, so if you've done this for another Facebook open source project, you're good to go. If you are submitting a pull request for the first time, the Facebook GitHub Bot will reply with a link to the CLA form. You may also [complete your CLA here](https://code.facebook.com/cla).

After you have signed the CLA, the CLA bot would automatically update the PR status. There's no need to open a new PR.

**CLAs are required for us to merge your pull request.** While we value your effort and are willing to wait for you to come back and address the reviews in case you are unavailable after sending the pull request, pull requests that are ready to merge but have CLA missing and no response from the author **will be closed within two weeks of opening**. If you have further questions about the CLA, please stay in touch with us.

If it happens that you were unavailable and your PR gets closed, feel free to reopen once it's ready! We are still happy to review it, help you complete it, and eventually merge it.

### 突发的变化

When adding a new breaking change, follow this template in your pull request:

```md
### New breaking change here

- **Who does this affect**:
- **How to migrate**:
- **Why make this breaking change**:
- **Severity (number of people affected x effort)**:
```

### 接下来会发生什么?

The core Docusaurus team will be monitoring pull requests. Do help us by keeping pull requests consistent by following the guidelines above.
