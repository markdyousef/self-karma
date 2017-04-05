import graphene

from graphene_django.types import DjangoObjectType
from .models import Profile


class ProfileType(DjangoObjectType):
    class Meta:
        model = Profile


class Query(graphene.AbstractType):
    profile = graphene.Field(
        ProfileType,
        id=graphene.String()
        # name=graphene.String()
    )
    all_profiles = graphene.List(ProfileType)

    def resolve_all_profiles(self, args, context, info):
        return Profile.objects.all()

    def resolve_profile(self, args, context, info):
        id = args.get('id')
        name = args.get('name')

        if id is not None:
            return Profile.objects.get(pk=id)

        if name is not None:
            return Profile.objects.get(name=name)

        return None
