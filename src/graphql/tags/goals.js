import gql from 'graphql-tag'

export const GET_DEFAULT_GOALS = gql`
    query {
        getAllGoals {
            category
            goals {
                id
                points
                category
                title
                errors
            }
        }
    }
`

export const GET_CUSTOM_GOAL = gql`
    query GetCustomGoal($groupId: ID, $creatorId: ID) {
        getCustomGoal(groupId: $groupId, creatorId: $creatorId) {
            id
            groupId
            category
            title
            points
            errors
            customGoalCreator
        }
    }
`

export const GET_CUSTOM_GOALS_BY_GROUPID_ARRAY = gql`
    query GetAllCustomGoalsByGroupArray($groupIds: [ID]) {
        getAllCustomGoalsByGroupArray(groupIds: $groupIds) {
            groupId
            customGoals {
                id
                groupId
                category
                customGoalCreator
                errors
                points
                title
                enabled
            }
        }
    }
`

export const REMOVE_USERS_FROM_GROUP = gql`
    mutation RemoveUsersFromGroupByUserId($data: RemoveUsersFromGroupInput) {
        removeUsersFromGroupByUserId(data: $data) {
            id
            groupName
            groupCreator
            groupMembers
            errors
        }
    }
`