<template>
    <h1>The user is {{ $route.params.name }} </h1>
</template>

<script>
export default {
    props: ["name"]
}
</script>
