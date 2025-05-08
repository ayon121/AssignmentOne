<h1>Blog 1</h1>
<hr>
<h2>What are some differences between interfaces and types in TypeScript?</h2>
<p>Interface and Type are the most common things that used Typescript. Both types and interfaces allows developers to create reusable structures for variables, function parameters, return types, and more. But there is some difference in Interface and Type. Also we use Type and Interface in different cases <br>

<b>Here are three major difference between Type and Interface</b>
1.Types in TypeScript are more flexible and can define primitive, intersection, union, tuple, or different types of data, while interfaces are used to describe the shape of an object. <br>

2.Interface can be declared multiple times and will merge.Type cannot be re-declared it will throw an error. <br>

3.interface cannot create union types.Type can easily create union or intersection types.

<p><br>
<p>
There are also difference in declering Interface and Type

<pre>
<code>
interface Person {
  name: string;
}

type Age = number;

</code>
</pre>

</p>